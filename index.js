const updateSkill = (skillId, value) => {
    // Najde element id posuvniku
    const skillElement = document.getElementById(skillId);
  
    // progress lista element id
    const progressBar = skillElement.querySelector('.skill__progress');
  
    // to same pro textovou hodnotu
    const skillValueId = skillElement.querySelector('.skill__value');
  
    // zabarveni posuvniku dle zadane hodnoty.
    progressBar.style.width = `${value}%`;
  
    // nastaveni textu
    skillValueId.textContent = `${value} / 100`;
  };
  
  // zadani hodnot uzivatelem
  
const setSkills = () => {
    // mapovani skill id a jejich nazvu
    const skillIdMap = [
      { id: 'skill1', name: 'HTML' },
      { id: 'skill2', name: 'CSS' },
      { id: 'skill3', name: 'JavaScript' }
    ];
  
    
    skillIdMap.forEach(({ id, name }) => {
      const userInput = prompt(`Zadejte úroveň dovednosti ${name}: (0-100)`);
  //prevede vstup na int v dekadicke soustave
      const skillValue = parseInt(userInput, 10);
  
      if (skillValue >= 0 && skillValue <= 100) {
        updateSkill(id, skillValue);
      } else {
        
        alert('Zadali jste neplatnou hodnotu. Prosím, zadejte číslo mezi 0 a 100.');
      }
    });
  };
  
  
  setSkills();
  