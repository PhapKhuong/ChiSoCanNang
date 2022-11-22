function doSth()
    {
        let w = +document.getElementById('weight').value;
        let h = +document.getElementById('height').value;
        let bmi = w/(h**2);

        if (bmi < 18.5)
            document.getElementById('result').innerText = "Interpretation: Underwweight; BMI = " + bmi;
        else if (bmi < 25)
            document.getElementById('result').innerText = "Interpretation: Normal; BMI = " + bmi;
        else if (bmi < 30)
            document.getElementById('result').innerText = "Interpretation: Overweight; BMI = " + bmi;
        else if (bmi >= 30)
            document.getElementById('result').innerText = "Interpretation: Obese; BMI = " + bmi;
        else
            document.getElementById('result').innerText = "Hãy nhập đúng cân nặng và chiều cao"
    }