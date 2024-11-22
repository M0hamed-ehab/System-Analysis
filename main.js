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


//-------------------------------------------------------Mohamed part ending---------------------------------------------------------