const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = parseInt(document.getElementById('height').value);
  let weight = parseInt(document.getElementById('weight').value);
  const res = document.getElementById('results');
  if (height === ' ' || height < 0 || isNaN(height)) {
    res.innerHTML = `Give a proper height ${height}`;
  }
  else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    res.innerHTML = `Give a proper weight ${weight}`;
  }
  else
  {
    const bmi = (weight/((height/100)*(height/100))).toFixed(2);
    if(bmi<=18.6){
      res.innerText=`BMI IS ${bmi} : UNDERWEIGHT`;
    }
    else if(bmi>18.6 && bmi<=24.9){
      res.innerText=`BMI IS ${bmi} : NORMAL`;
    }
    else{
      res.innerText=`BMI IS ${bmi} : OVERWEIGHT`;
    }
    
  }

});
