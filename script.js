
document.getElementById("regidper").disabled = true;
document.getElementById("dicimg").disabled = true;
document.getElementById("coupning").disabled = true;

let formInfo = [];


let diceScore = [];


let attempt = 2;
let RemainingDiceClick = 3;
let totalScore = 0;


function openForm() {
    document.getElementById('form').classList.remove('nodisplay');
}


function submitFormInfo() {
    let name = document.getElementById('fname').value;
    let userName = document.getElementById('formusername').value;
    let email = document.getElementById('formemail').value;
    if (name && userName && email) {
        let obj = {
            Name: name,
            UserName: userName,
            Email: email,
        }

        formInfo.push(obj);
        document.getElementById("regidper").disabled = false;
        document.getElementById("regist").disabled = true;
        alert('Your Info is Submitted successfully! Click on the next image to view your info.')
        document.getElementById('form').classList.add('nodisplay');
       
    } else {
        alert(`Please fill all the required fields.`)
    }
}


 
function displayFormInfo() {
    document.getElementById('finfo').innerText = `Name: ${formInfo[0].Name}, User Name: ${formInfo[0].UserName}, Email: ${formInfo[0].Email}`
    document.getElementById('displayformInfo').classList.remove('nodisplay');
    document.getElementById("dicimg").disabled = false;
    document.getElementById("regidper").disabled = true;
}

function displayDiceScore() {
    document.getElementById('displayformInfo').classList.add('nodisplay');
    attempt--;
    console.log(`attempt remaining= ${attempt}`);
    document.getElementById('attemptsLeft').innerText = attempt;
    document.getElementById('diceScore').classList.remove('nodisplay');
    document.getElementById("dicimg").disabled = true;

}



function diceClickfun() {
    RemainingDiceClick--;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;
    
    if (RemainingDiceClick === 0) {
        document.getElementById("diceImg").disabled = true;
        document.getElementById('score').innerText = totalScore;
        if (totalScore > 10) {
            alert(` Congratulations  !!! Your total score is greater than 10. Click on next Image to grt your coupon code.`);
            document.getElementById('diceScore').classList.add('nodisplay');
            document.getElementById("coupning").disabled = false;
        } else {
            if (attempt != 0) {
                // document.getElementById('score').innerText = totalScore;
                alert(`So Bad!!! Your total score is ${totalScore} which is less than 10.Please try again!!`);
                document.getElementById("dicimg").disabled = false;
                RemainingDiceClick = 3;
                totalScore = 0;
                document.getElementById("diceImg").disabled = false;
                document.getElementById('diceScore').classList.add('nodisplay');
                console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
                console.log(`totalScore = ${totalScore}`);

            } else {
                document.getElementById('score').innerText = totalScore;
                alert(` Bad luck!!! Your total score is not greater than 10 & You have crossed all your attempts. Please Start from begining!!!!`);
                document.getElementById('diceScore').classList.add('hidden');
                document.getElementById('tryImg').classList.remove('nodisplay');
            }
        }
    }
}

// Image 4 Function : Generate 12 digit coupon code when clicked on image 4 and alert it.

function generateCouponCode() {
    document.getElementById("coupning").disabled = true;
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);
    }
    document.getElementById('congimage').classList.remove('nodisplay');
    alert(`Congratulations!!! You have successfully got a coupon. Your coupon code is ${coupon}`)
}