import {business,services,properties} from './config.js';
export function todayLocal(now=new Date()){return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
export function isResidential(form){return ['Maison','Appartement'].includes(form.property);}
export function validate(form,today=todayLocal()){
 const errors={};
 for(const [key,label] of Object.entries({service:'un type de service',property:'un type de propriété',date:'une date souhaitée',name:'votre nom complet',phone:'votre numéro de téléphone',city:'votre ville ou secteur'})) if(!form[key]?.trim()) errors[key]=`Veuillez indiquer ${label}.`;
 if(form.service&&!services.some(s=>s.id===form.service))errors.service='Veuillez choisir un service proposé.';
 if(form.property&&!properties[form.service]?.includes(form.property))errors.property='Veuillez choisir un type de propriété approprié.';
 if(form.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(form.date)||form.date<today||Number.isNaN(Date.parse(form.date))))errors.date='Choisissez aujourd’hui ou une date à venir.';
 if(form.phone&&form.phone.replace(/\D/g,'').length<10)errors.phone='Veuillez entrer un numéro de téléphone valide (au moins 10 chiffres).';
 if(form.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))errors.email='Veuillez entrer une adresse courriel valide.';
 if(form.area&&(!Number.isFinite(Number(form.area))||Number(form.area)<=0))errors.area='Veuillez indiquer une superficie supérieure à zéro.';
 return errors;
}
export function formatDate(date){return date?new Intl.DateTimeFormat('fr-CA',{dateStyle:'long'}).format(new Date(`${date}T12:00:00`)):'À préciser';}
export function buildMessage(form){return [
'Bonjour, je souhaite obtenir une soumission pour un service de nettoyage.',
'',`Service : ${services.find(s=>s.id===form.service)?.title||'À préciser'}`,`Type de propriété : ${form.property}`,
form.area&&`Superficie approximative : ${form.area} pi²`,isResidential(form)&&form.bedrooms!==''&&`Nombre de chambres : ${form.bedrooms}`,form.bathrooms!==''&&`Nombre de salles de bain : ${form.bathrooms}`,
`Fréquence : ${form.frequency}`,`Date souhaitée : ${formatDate(form.date)}`,`Produits et matériel : ${form.materials}`,'',`Nom complet : ${form.name}`,`Téléphone : ${form.phone}`,form.email&&`Courriel : ${form.email}`,`Ville ou secteur : ${form.city}`,form.notes&&`Précisions supplémentaires : ${form.notes}`,'','Le tarif et la disponibilité seront confirmés par votre équipe.'].filter(x=>x!==false&&x!==undefined&&x!==null).join('\n');}
export function whatsappUrl(message){return `${business.whatsapp}?text=${encodeURIComponent(message)}`;}
