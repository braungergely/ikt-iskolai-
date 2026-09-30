// ==========================================
// UMSZKI ÓRAREND ADATOK
// ==========================================

const orarendek = {

    "9a": {
        hetfo: [
            ["1. óra", "Matematika", "Kovács Anna", "101"],
            ["2. óra", "Magyar nyelv", "Nagy Péter", "203"],
            ["3. óra", "Történelem", "Kiss Béla", "203"],
            ["4. óra", "Informatika", "Szabó Gábor", "IKT 1"],
            ["5. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["6. óra", "Testnevelés", "Horváth Zoltán", "Torna"]
        ],

        kedd: [
            ["1. óra", "Fizika", "Kiss Béla", "204"],
            ["2. óra", "Matematika", "Kovács Anna", "101"],
            ["3. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["4. óra", "Informatika", "Szabó Gábor", "IKT 1"],
            ["5. óra", "Magyar nyelv", "Nagy Péter", "203"]
        ],

        szerda: [
            ["1. óra", "Történelem", "Kiss Béla", "203"],
            ["2. óra", "Matematika", "Kovács Anna", "101"],
            ["3. óra", "Programozás", "Szabó Gábor", "IKT 2"],
            ["4. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["5. óra", "Testnevelés", "Horváth Zoltán", "Torna"]
        ],

        csutortok: [
            ["1. óra", "Magyar nyelv", "Nagy Péter", "203"],
            ["2. óra", "Fizika", "Kiss Béla", "204"],
            ["3. óra", "Informatika", "Szabó Gábor", "IKT 1"],
            ["4. óra", "Matematika", "Kovács Anna", "101"]
        ],

        pentek: [
            ["1. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["2. óra", "Matematika", "Kovács Anna", "101"],
            ["3. óra", "Történelem", "Kiss Béla", "203"],
            ["4. óra", "Testnevelés", "Horváth Zoltán", "Torna"]
        ]
    },

    "9b": {
        hetfo: [
            ["1. óra", "Informatika", "Szabó Gábor", "IKT 1"],
            ["2. óra", "Matematika", "Kovács Anna", "101"],
            ["3. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["4. óra", "Történelem", "Kiss Béla", "203"],
            ["5. óra", "Fizika", "Kiss Béla", "204"]
        ],

        kedd: [
            ["1. óra", "Magyar nyelv", "Nagy Péter", "203"],
            ["2. óra", "Matematika", "Kovács Anna", "101"],
            ["3. óra", "Informatika", "Szabó Gábor", "IKT 2"],
            ["4. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["5. óra", "Testnevelés", "Horváth Zoltán", "Torna"]
        ],

        szerda: [
            ["1. óra", "Fizika", "Kiss Béla", "204"],
            ["2. óra", "Történelem", "Kiss Béla", "203"],
            ["3. óra", "Matematika", "Kovács Anna", "101"],
            ["4. óra", "Magyar nyelv", "Nagy Péter", "203"]
        ],

        csutortok: [
            ["1. óra", "Angol nyelv", "Tóth Éva", "105"],
            ["2. óra", "Informatika", "Szabó Gábor", "IKT 1"],
            ["3. óra", "Matematika", "Kovács Anna", "101"],
            ["4. óra", "Testnevelés", "Horváth Zoltán", "Torna"]
        ],

        pentek: [
            ["1. óra", "Történelem", "Kiss Béla", "203"],
            ["2. óra", "Magyar nyelv", "Nagy Péter", "203"],
            ["3. óra", "Fizika", "Kiss Béla", "204"],
            ["4. óra", "Informatika", "Szabó Gábor", "IKT 2"]
        ]
    }

};


// ==========================================
// OSZTÁLYOK AUTOMATIKUS ADATGENERÁLÁSA
// ==========================================

const osztalyok = [
    "10a",
    "10b",
    "11a",
    "11b",
    "12a",
    "12b"
];

const alapOrak = [
    ["1. óra", "Matematika", "Kovács Anna", "101"],
    ["2. óra", "Magyar nyelv", "Nagy Péter", "203"],
    ["3. óra", "Történelem", "Kiss Béla", "203"],
    ["4. óra", "Informatika", "Szabó Gábor", "IKT 1"],
    ["5. óra", "Angol nyelv", "Tóth Éva", "105"]
];

const napok = [
    "hetfo",
    "kedd",
    "szerda",
    "csutortok",
    "pentek"
];

osztalyok.forEach(osztaly => {

    orarendek[osztaly] = {};

    napok.forEach(nap => {

        orarendek[osztaly][nap] =
            [...alapOrak];

    });

});


// ==========================================
// ÓRAREND MEGJELENÍTÉSE
// ==========================================

const osztalySelect =
    document.getElementById("osztaly");

const napSelect =
    document.getElementById("nap");

const tabla =
    document.getElementById("orarendTabla");


function mutatOrarend() {

    const osztaly = osztalySelect.value;

    const nap = napSelect.value;

    const adatok = orarendek[osztaly][nap];

    let html = `

        <table class="orarend">

            <thead>

                <tr>
                    <th>Óra</th>
                    <th>Tantárgy</th>
                    <th>Tanár</th>
                    <th>Terem</th>
                </tr>

            </thead>

            <tbody>
    `;


    adatok.forEach(ora => {

        html += `

            <tr>

                <td class="ora">
                    ${ora[0]}
                </td>

                <td class="tantargy">
                    ${ora[1]}
                </td>

                <td>
                    ${ora[2]}
                </td>

                <td>
                    ${ora[3]}
                </td>

            </tr>

        `;

    });


    html += `

            </tbody>

        </table>

    `;


    tabla.innerHTML = html;
}


// ==========================================
// TANÁROK
// ==========================================

const tanarok = [

    {
        nev: "Kovács Anna",
        tantargy: "Matematika",
        email: "kovacs.anna@umszki.hu"
    },

    {
        nev: "Nagy Péter",
        tantargy: "Magyar nyelv és irodalom",
        email: "nagy.peter@umszki.hu"
    },

    {
        nev: "Kiss Béla",
        tantargy: "Történelem / Fizika",
        email: "kiss.bela@umszki.hu"
    },

    {
        nev: "Szabó Gábor",
        tantargy: "Informatika / Programozás",
        email: "szabo.gabor@umszki.hu"
    },

    {
        nev: "Tóth Éva",
        tantargy: "Angol nyelv",
        email: "toth.eva@umszki.hu"
    },

    {
        nev: "Horváth Zoltán",
        tantargy: "Testnevelés",
        email: "horvath.zoltan@umszki.hu"
    }

];


function mutatTanarokat(kereses = "") {

    const lista =
        document.getElementById("tanarLista");

    const eredmeny =
        tanarok.filter(tanar =>

            tanar.nev
                .toLowerCase()
                .includes(kereses.toLowerCase())

        );


    lista.innerHTML = eredmeny.map(tanar => `

        <div class="card">

            <h3>${tanar.nev}</h3>

            <p>
                📚 ${tanar.tantargy}
            </p>

            <p>
                ✉️ ${tanar.email}
            </p>

        </div>

    `).join("");

}


// ==========================================
// TERMEK
// ==========================================

const termek = [

    {
        nev: "101-es terem",
        tipus: "Tanterem",
        emelet: "1. emelet"
    },

    {
        nev: "105-ös terem",
        tipus: "Nyelvi terem",
        emelet: "1. emelet"
    },

    {
        nev: "203-as terem",
        tipus: "Tanterem",
        emelet: "2. emelet"
    },

    {
        nev: "204-es terem",
        tipus: "Fizika terem",
        emelet: "2. emelet"
    },

    {
        nev: "IKT 1",
        tipus: "Informatika terem",
        emelet: "1. emelet"
    },

    {
        nev: "IKT 2",
        tipus: "Informatika terem",
        emelet: "2. emelet"
    },

    {
        nev: "Torna",
        tipus: "Tornaterem",
        emelet: "Földszint"
    }

];


function mutatTermeket(kereses = "") {

    const lista =
        document.getElementById("teremLista");

    const eredmeny =
        termek.filter(terem =>

            terem.nev
                .toLowerCase()
                .includes(kereses.toLowerCase())

        );


    lista.innerHTML = eredmeny.map(terem => `

        <div class="card">

            <h3>🏫 ${terem.nev}</h3>

            <p>
                📌 ${terem.tipus}
            </p>

            <p>
                📍 ${terem.emelet}
            </p>

        </div>

    `).join("");

}


// ==========================================
// ESEMÉNYEK
// ==========================================

osztalySelect.addEventListener(
    "change",
    mutatOrarend
);

napSelect.addEventListener(
    "change",
    mutatOrarend
);


document
    .getElementById("tanarKereses")
    .addEventListener("input", event => {

        mutatTanarokat(event.target.value);

    });


document
    .getElementById("teremKereses")
    .addEventListener("input", event => {

        mutatTermeket(event.target.value);

    });


// ==========================================
// INDÍTÁS
// ==========================================

mutatOrarend();

mutatTanarokat();

mutatTermeket();
