/* Browser presentation revision 1. No engine, onboarding, or consent changes. */
(function(){'use strict';
 const trial=window.NexusBrowserTrial,box=window.NexusBrowserTrialPanel;
 if(!box||!['recovery','foundry','adapter'].includes(trial.kind))return;
 trial.presentationRevision=1;
 const rules=document.createElement('style');rules.id='nexusStudioTrialPresentation';
 rules.textContent=`#nexusBrowserTrial{margin:0;padding:14px;border:1px solid currentColor;border-color:var(--rs-border,var(--line,#79c4a544));border-radius:12px;background:transparent;color:inherit;max-width:100%;min-width:0;box-sizing:border-box;overflow-wrap:anywhere}#nexusBrowserTrial input{max-width:100%;box-sizing:border-box}#nexusBrowserTrial button{max-width:100%;white-space:normal}#nexusBrowserTrialDetails{margin:16px 0;min-width:0;max-width:100%}#nexusBrowserTrialDetails>summary{cursor:pointer;font-weight:600;margin-bottom:10px}.rsLogo.nexusStudioLogo,.wzLogo.nexusStudioLogo{display:block!important;width:48px!important;height:48px!important;padding:0!important;border:0!important;background:none!important;box-shadow:none!important;flex:0 0 48px}.nexusStudioLogo img{display:block;width:48px;height:48px;object-fit:contain}.nexusAdapterBrand{display:flex;align-items:center;gap:12px}.nexusAdapterBrand strong{margin:0!important}.nexusAdapterBrand .nexusStudioLogo{flex:0 0 48px}.nexusAdapterBrand{margin-bottom:16px}`;
 document.head.append(rules);
 function mount(){
  const target=document.getElementById({recovery:'rsSettings',foundry:'wzSettings',adapter:'nxSettings'}[trial.kind]);
  const brand=trial.kind==='adapter'?document.querySelector('aside>strong'):document.querySelector(trial.kind==='recovery'?'.rsLogo':'.wzLogo');
  if(!target||!brand)return false;
  const icon=document.createElement('img');icon.src=document.querySelector('link[rel=icon]').href;icon.alt='Nexus '+trial.product+' logo';icon.width=48;icon.height=48;
  if(trial.kind==='adapter'){
   const row=document.createElement('div');row.className='nexusAdapterBrand';const holder=document.createElement('span');holder.className='nexusStudioLogo';holder.append(icon);brand.before(row);row.append(holder,brand);
  }else{brand.replaceChildren(icon);brand.classList.add('nexusStudioLogo');brand.removeAttribute('aria-hidden');}
  if(trial.kind==='foundry'){const version=document.querySelector('.wzBrand small span');if(version)version.textContent='Browser edition '+trial.version;}
  const details=document.createElement('details');details.id='nexusBrowserTrialDetails';details.open=true;
  const summary=document.createElement('summary');summary.textContent='Browser trial · diagnostics and license';details.append(summary,box);
  // Put the tools after the existing Settings heading, not before the application.
  const heading=target.querySelector(':scope > h1, :scope > .rsSettingsHeader');if(heading)heading.after(details);else target.prepend(details);
  delete window.NexusBrowserTrialPanel;
  return true;
 }
 // These studios construct their actual sidebar during DOMContentLoaded.
 function ready(){if(mount())return;const observer=new MutationObserver(()=>{if(mount())observer.disconnect();});observer.observe(document.body,{childList:true,subtree:true});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
