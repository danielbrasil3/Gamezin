const custo_un_Martelo_de_Borracha = 31.00
const custo_un_Marreta = 35.00
const custo_un_Arame = 32.00
const custo_un_Kit_Chave_Boca = 37.00
const custo_un_Martelo_de_Madeira = 41.00

const qtde_Martelo_de_Borracha = 100
const qtde_Marreta = 20
const qtde_Arame = 100
const qtde_Kit_Chave_Boca = 2
const qtde_Martelo_de_Madeira = 10

let margem
const num = 0
const produtoMarteloDeBorracha = {
    produto: 'Martelo de Borracha',
    avaliação: '4.5',
    custo_un: 'R$' + custo_un_Martelo_de_Borracha,
    quantidade_total: qtde_Martelo_de_Borracha,
    saida: 'Alta',
    margem_de_lucro: '20%',
    custo_total: 'R$' + custo_total(custo_un_Martelo_de_Borracha, qtde_Martelo_de_Borracha)
};

const produtoMarreta = {
    produto: 'Marreta',
    avaliação: '5',
    custo_un: 'R$' + custo_un_Marreta,
    quantidade_total: qtde_Marreta,
    saida: 'Muito Alta',
    margem_de_lucro: '21%',
    custo_total: 'R$' + custo_total(custo_un_Marreta, qtde_Marreta)
};

const produtoArame = {
    produto: 'Arame',
    avaliação: '4',
    custo_un: 'R$' + custo_un_Arame,
    quantidade_total: qtde_Arame,
    saida: 'Media',
    margem_de_lucro: '18%',
    custo_total: 'R$' + custo_total(custo_un_Arame, qtde_Arame)
};

const produtoKitChaveBoca = {
    produto: 'Kit Chave Boca',
    avaliação: '2',
    custo_un: 'R$' + custo_un_Kit_Chave_Boca,
    quantidade_total: qtde_Kit_Chave_Boca,
    saida: 'Baixa',
    margem_de_lucro: '10%',
    custo_total: 'R$' + custo_total(custo_un_Kit_Chave_Boca, qtde_Kit_Chave_Boca)
};

const produtoMarteloDeMadeira = {
    produto: 'Martelo de Madeira',
    avaliação: '2.5',
    custo_un: 'R$' + custo_un_Martelo_de_Madeira,
    quantidade_total: qtde_Martelo_de_Madeira,
    saida: 'Muito Baixa',
    margem_de_lucro: '25%',
    custo_total: 'R$' + custo_total(custo_un_Martelo_de_Madeira, qtde_Martelo_de_Madeira)
};


function custo_total(custo_un, quantidade_total)
{
    return custo_un * quantidade_total
}



function openModal(e){
    const index = parseInt(e.id.split("-")[1]); // Extract index from button id
    const modal = document.getElementById('margemset')
    const setarmargem = document.getElementById('setarmargem')
    modal.classList.add('mostrar')
    setarmargem.addEventListener("keyup", e => {
        e.preventDefault();
        var newMargem = setarmargem.value;
        console.log(newMargem)
        updateMargem(index, newMargem);
        if (e.key === 'Enter')
            modal.click();
    });
    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'margemset' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'margemset'
            clearFields()
        }
    })
}


function getquantia(item)
{
    let quantiacomprar = document.getElementById('quantiacomprar')
    let quantia = quantiacomprar.value
    item.innerHTML = `${quantia}`
}


function openModal2(e){
    const paiElemento1 = e.parentNode;
    const compra = document.getElementById('compra')
    const quantiacomprar = document.getElementById('quantiacomprar')
    compra.classList.add('mostrar')
    quantiacomprar.addEventListener("keyup", e => {
        e.preventDefault();
        if (e.keyCode === 13)
            compra.click();
            console.log(paiElemento1)
            getquantia(paiElemento1)
    });
    compra.addEventListener('click', (e) =>{
        if (e.target.id == 'compra' || e.target.id == "fechar"){
            compra.classList.remove('mostrar')
            localStorage.fechaModal = 'compra'
        }
    })
}


const updateMargem = (index, newMargem) => {
    console.log(index)
    item.margem_de_lucro = newMargem + '%';
    updateClient(index, item);
    updateTable();
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const isClientCreated = localStorage.getItem('clientCreated');

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}
const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const createRow = (client, index) => {
        const newRow = document.createElement('tr')
        newRow.innerHTML = `
        <td>${client.produto}</td>
        <td>${client.avaliação}</td>
        <td>${client.custo_un}</td>
        <td>${client.quantidade_total}</td>
        <td>${client.saida}</td>
        <td>${client.margem_de_lucro} <button id="margem-${index}" onclick="openModal(this)"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="#666666"/>
        </svg></button></td>
        <td>${client.custo_total} <button id="compra-${index}"onclick="openModal2(this)"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16665 7.49999H10.8333V4.99999H13.3333V3.33333H10.8333V0.833328H9.16665V3.33333H6.66665V4.99999H9.16665V7.49999ZM5.83331 15C4.91665 15 4.17498 15.75 4.17498 16.6667C4.17498 17.5833 4.91665 18.3333 5.83331 18.3333C6.74998 18.3333 7.49998 17.5833 7.49998 16.6667C7.49998 15.75 6.74998 15 5.83331 15ZM14.1666 15C13.25 15 12.5083 15.75 12.5083 16.6667C12.5083 17.5833 13.25 18.3333 14.1666 18.3333C15.0833 18.3333 15.8333 17.5833 15.8333 16.6667C15.8333 15.75 15.0833 15 14.1666 15ZM5.97498 12.2917L5.99998 12.1917L6.74998 10.8333H12.9583C13.5833 10.8333 14.1333 10.4917 14.4166 9.97499L17.6333 4.13333L16.1833 3.33333H16.175L15.2583 4.99999L12.9583 9.16666H7.10831L6.99998 8.94166L5.13331 4.99999L4.34165 3.33333L3.55831 1.66666H0.833313V3.33333H2.49998L5.49998 9.65833L4.37498 11.7C4.24165 11.9333 4.16665 12.2083 4.16665 12.5C4.16665 13.4167 4.91665 14.1667 5.83331 14.1667H15.8333V12.5H6.18331C6.07498 12.5 5.97498 12.4083 5.97498 12.2917Z" fill="#75F94C"/>
        </svg></button></td>
        `
        document.querySelector('#tableestoque>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableestoque>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

if (!isClientCreated) {
    createClient(produtoMarteloDeBorracha);
    createClient(produtoMarreta);
    createClient(produtoArame);
    createClient(produtoKitChaveBoca);
    createClient(produtoMarteloDeMadeira);
    localStorage.setItem('clientCreated', 'true');
}
updateTable()




