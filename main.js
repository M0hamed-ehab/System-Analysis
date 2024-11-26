//-------------------------------------------------------Mohamed part---------------------------------------------------------
const def = "rgb(240, 248, 255)";
function like(x) {

    const y = x.parentElement.querySelector(".LCCCrc");
    const z = x.style.backgroundColor;
    const q = x.parentElement.querySelector(".LCCCrd").style.backgroundColor;
    console.log("this is like" + z);
    console.log("this is dislike" + q);
    if (q == "" && z == "") {
        y.textContent = parseInt(y.textContent) + 1;
        x.style.backgroundColor = "rgb(169, 236, 147)";
        x.parentElement.querySelector(".LCCCrd").style.backgroundColor = def;
    }
    else if (q !== def) {
        y.textContent = parseInt(y.textContent) + 2;
        x.style.backgroundColor = "rgb(169, 236, 147)";
        x.parentElement.querySelector(".LCCCrd").style.backgroundColor = def;
    } else if (z !== def) { return; }



}


function dislike(x) {
    const y = x.parentElement.querySelector(".LCCCrc");
    const z = x.style.backgroundColor;
    const q = x.parentElement.querySelector(".LCCCru").style.backgroundColor;
    if (q == "" && z == "") {
        y.textContent = parseInt(y.textContent) - 1;
        x.style.backgroundColor = "rgb(236, 148, 147)";
        x.parentElement.querySelector(".LCCCru").style.backgroundColor = def;
    }
    else if (q !== def) {
        y.textContent = parseInt(y.textContent) - 2;
        x.style.backgroundColor = "rgb(236, 148, 147)";
        x.parentElement.querySelector(".LCCCru").style.backgroundColor = def;
    } else if (z !== def) { return; }
    // x.style.backgroundColor = "rgb(236, 148, 147)";

}

function createPost() {
    console.log(document.getElementById('POST').value);
    var x = document.getElementById('POST').value;

    if (x.trim() == "") {
        console.log("if");
        popup();
        console.log("return");
        return;
    }

    var y = document.createElement("div");
    y.classList.add("LCCCs");


    var n = `
                <div class="LCCCsj">
                    <div class="LCCCnp">
                        You <span class="LCCCnd">Just now <button class="removePost" onclick="removePost(this)">x</button></span>
                    </div>
                </div>
                <div class="LCCCt">
                    ${x}
                </div>
                <div class="LCCCr">
                    <button class="LCCCrd" onclick="dislike(this)">
                        <span>&#128078;</span>
                    </button>
                    <span class="LCCCrc">0</span>
                    <button class="LCCCru" onclick="like(this)">
                        <span>&#128077;</span>
                    </button>
                </div>
            `;


    y.innerHTML = n;


    document.getElementById("NEWPOST").prepend(y);
    document.getElementById("POST").value = "";



}

function removePost(x) {
    var y = x.closest('.LCCCs');
    y.remove();
}



function popupF(x) {
    x.preventDefault();
    const b = document.getElementById("POPUP");
    b.style.display = "block";
    document.getElementById('bname').value = '';
    document.getElementById('auth_name').value = '';
    document.getElementById('genre').value = '';

    console.log("popup");

}
function popup() {

    const b = document.getElementById("POPUP");
    b.style.display = "block";

    console.log("popup");

}

function removePopup() {
    const b = document.getElementById("POPUP");
    b.style.display = "none";
}




function AccForm() {
    const X = document.getElementById('savedAccountForm');
    const y = document.getElementById('newAccountForm');
    const Z = document.getElementById('newAccount').checked;

    if (Z) {
        X.style.display = "none";
        y.style.display = "block";
    } else {
        y.style.display = "none";
        X.style.display = "block";
    }
}

function selectPayment(X) {
    const S = document.getElementById('SBB');
    const N = document.getElementById('NBB');
    const C = document.getElementById('CBB');
    const NC = document.getElementById('NCBB');


    [S, N, C].forEach(el => el.classList.remove('selected'));


    NC.style.display = "none";

    switch (X) {
        case 'S':
            S.classList.add('selected');
            break;
        case 'N':
            N.classList.add('selected');
            NC.style.display = "block";
            break;
        case 'C':
            C.classList.add('selected');
            break;
    }
}

function updateTotal() {
    const X = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const F = X === 'home' ? 2.00 : (X == "locker" ? 5.00 : 0.00);
    document.getElementById('deliveryFee').textContent = `Delivery Fee: $${F.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `$${(20 + F).toFixed(2)}`;
}


function confirmBorrowing(event) {
    event.preventDefault();
    const X = document.getElementById('newAccount').checked;
    const Y = X ? document.getElementById('newMemberID').value : document.getElementById('memberID').value;
    const E = X ? document.getElementById('newEmail').value : document.getElementById('email').value;
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const N = {
        email: document.getElementById('emailN').checked,
        sms: document.getElementById('smsN').checked,
        reminders: document.getElementById('remN').checked
    };

    if (X && (!Y || !E)) {
        popup();
        return;
    }

    const P = document.querySelector('.LBDPSMC.selected').id;

    if (P === 'NBB') {
        const CN = document.getElementById('cardNumber').value;
        const ED = document.getElementById('expiry').value;

        if (!CN || !ED) {
            popup();
            return;
        }
    }
    document.getElementById("POPUP").textContent = "BORROWING IS COMPLETED";
    popup();


}



//-------------------------------------------------------Mohamed part ending---------------------------------------------------------