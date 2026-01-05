const pokenome = document.querySelector('.nome')
const pokenum = document.querySelector('.number')
const pokeimg = document.querySelector('.image')

const pokeform = document.querySelector('.form')
const pokebus = document.querySelector('.busca')
const pokepro = document.querySelector('.next')
const pokeante = document.querySelector('.prev')
const pokeup = document.querySelector('.popuptext')
const poketext = document.querySelector('.popup')
const pokebri = document.querySelector('.bri')
const pokesh = document.querySelector('.lho')




function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

}


let buscar = 1;

const fethPokemon = async (pokemon) => {
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (API.status == 200) {
        const data = await API.json();
        return data;
    }

}
const ler = async (pokemon) => {

    pokenome.innerHTML = 'carregando...';
    const data = await fethPokemon(pokemon);

    if (data) {

        let caixa = false
        if (pokesh.checked) {
            caixa = true

        }

        if (caixa == false) {



            if (data['types']['1'] == null) {
                if (pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null) {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;
                    pokeup.innerHTML = data['types']['0']['type']['name']
                    pokeimg.src = data['sprites']['front_default']
                    pokebus.value = ''
                    buscar = data.id
                } else {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;
                    pokeup.innerHTML = data['types']['0']['type']['name']
                    pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                    pokebus.value = ''
                    buscar = data.id
                }
            } else {
                if (pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null) {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;
                    pokeup.innerHTML = data['types']['0']['type']['name'] + ', ' + data['types']['1']['type']['name']
                    pokeimg.src = data['sprites']['front_default']
                    pokebus.value = ''
                    buscar = data.id
                } else {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;

                    pokeup.innerHTML = data['types']['0']['type']['name'] + ', ' + data['types']['1']['type']['name']

                    pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                    pokebus.value = ''
                    buscar = data.id
                }
            }

        }
        //shine
        else {
            if (data['types']['1'] == null) {
                if (pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null) {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;
                    pokeup.innerHTML = data['types']['0']['type']['name']
                    pokeimg.src = data['sprites']['front_shiny']
                    pokebus.value = ''
                    buscar = data.id
                } else {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;
                    pokeup.innerHTML = data['types']['0']['type']['name']
                    pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
                    pokebus.value = ''
                    buscar = data.id
                }
            } else {
                if (pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] == null) {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;
                    pokeup.innerHTML = data['types']['0']['type']['name'] + ', ' + data['types']['1']['type']['name']
                    pokeimg.src = data['sprites']['front_shiny']
                    pokebus.value = ''
                    buscar = data.id
                } else {
                    pokeimg.style.display = 'block'
                    pokenome.innerHTML = data.name;
                    pokenum.innerHTML = data.id;

                    pokeup.innerHTML = data['types']['0']['type']['name'] + ', ' + data['types']['1']['type']['name']

                    pokeimg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
                    pokebus.value = ''
                    buscar = data.id
                }
            }




        }

    } else {
        pokenome.innerHTML = 'Não encontrado'
        pokenum.innerHTML = '?????????????????????????????????????????????????????????'
        pokeimg.src = './images/tumblr_6cb82a7fed5509f353675d8254ad6280_9793c911_540.gif'
        pokeup.innerHTML = 'mIsS1ngN0ndou1h39pb1u3bf193ubf913fp19u3fb1e9ubf19bf1ubf19bf1093f'
    }


}

pokeform.addEventListener('submit', (event) => {
    event.preventDefault()
    ler(pokebus.value.toLowerCase())
})

pokeante.addEventListener('click', () => {
    if (buscar > 1) {
        buscar += -1
        ler(buscar)
    }

})

pokepro.addEventListener('click', () => {
    buscar += 1
    ler(buscar)
})

pokebri.addEventListener('click', () => {


})

ler(buscar)