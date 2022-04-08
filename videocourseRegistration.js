class UserRegister {
    constructor (container) {
        this.container = container
        this.init()
    }

    init () {
        this.resolveElements()
        this.addEventListeners()
    }

    resolveElements () {
        this.user = document.querySelector('html').classList.contains('logged-in')
        this.loginButton = document.getElementById('authButton')
    }

    addEventListeners () {
        if (!this.user) {
            this.loginButton.addEventListener('click', () => this.showRegistrationModal())
        }
    }

    checkUser () {
        if (!this.user) {
            this.showRegistrationModal()
            this.container.classList.add('blocked')
        } else {
            this.container.classList.remove('blocked')
            this.loginButton.style.display = 'none'
        }
    }

    showRegistrationModal () {
        this.modal = document.createElement('div')
        this.modal.classList.add('modal')
        this.modal.innerHTML = `
    <div class="modal-inner">
        <div id="modalClose">
       close X
</div>
        <div class="modal-tabs">
        <div class="modal-tabs-header">
          <span data-action="login" class="active">Anmelden</span>
          <span data-action="register">Registrien</span>
        </div>
      <div class="modal-tabs-content">
      <div data-tab="login">
        <form id="videoLoginForm" class="form">
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="text" name="userLogin" data-id="userLogin" placeholder="Login" required></div>
        </div>
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="password" name="userPassword" data-id="userPassword" placeholder="Passwort" required></div>
        </div>
        <button type="button" id="loginSubmit">Anmelden</button>
      <div class="log" style="display: none">Markierte Felder müssen ausgefüllt werden</div>
      </form>
      
      </div>
      <div data-tab="register" style="display: none">
      <form id="videoRegistrationForm" class="form">
      <div class="form-row">
          <label>Anrede:</label>
          <div class="form-group">
              <div class="form-control">
                  <input class="form-input" type="radio" value="female" id="female" name="anredeGroup" required>
                  <label for="female">Frau</label> 
              </div>    
          </div>
          <div class="form-group">
              <div class="form-control">
                  <input class="form-input" type="radio" value="male" id="male" name="anredeGroup" required>
                  <label for="male">Herr</label> 
              </div>    
          </div>
          <div class="form-group">
              <div class="form-control">
                  <input class="form-input" type="radio" value="other" id="other" name="anredeGroup" required>
                  <label for="other">Divers</label>   
            </div>  
          </div>
        </div>
        <div class="form-row">
            <div class="form-group">
              <div class="form-control"><input class="form-input" type="text" name="userLastName" data-id="userLastName" placeholder="Vorname" required></div>
            </div>
            <div class="form-group">
              <div class="form-control"><input class="form-input" type="text" name="userFirstName" data-id="userFirstName" placeholder="Nachname" required></div>
            </div>
        </div>
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="email" name="userEmail" data-id="userEmail" placeholder="E-Mail" required></div>
        </div>
        <div class="form-group">
              <div class="form-control">
                  <select class="form-input" name="userMunicipality" data-id="userMunicipality" title="Stadt / Kommune" required>
                    <option value="" selected disabled>Stadt / Kommune</option>
                    <option value="BadenWürttemberg" name="BadenWürttemberg">Baden-Württemberg</option>
                    <option value="Bayern" name="Bayern">Bayern</option>
                    <option value="Berlin" name="Berlin">Berlin</option>
                    <option value="Brandenburg" name="Brandenburg">Brandenburg</option>
                    <option value="Bremen" name="Bremen">Bremen</option>
                    <option value="Hamburg" name="Hamburg">Hamburg</option>
                    <option value="Hessen" name="Hessen">Hessen</option>
                    <option value="MecklenburgVorpommern" name="MecklenburgVorpommern">Mecklenburg-Vorpommern</option>
                    <option value="Niedersachsen" name="Niedersachsen">Niedersachsen</option>
                    <option value="NordrheinWestfalen" name="NordrheinWestfalen">Nordrhein-Westfalen</option>
                    <option value="RheinlandPfalz" name="RheinlandPfalz">Rheinland-Pfalz</option>
                    <option value="Saarland" name="Saarland">Saarland</option>
                    <option value="SachsenAnhalt" name="SachsenAnhalt">Sachsen-Anhalt</option>
                    <option value="SchleswigHolstein" name="SchleswigHolstein">Schleswig-Holstein</option>
                    <option value="Thüringen" name="Thüringen">Thüringen</option>
                  </select>
              </div>
            </div>
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="text" name="userCompany" data-id="userCompany" placeholder="Unternehmen"></div>
        </div>
        <div class="form-row">
        <div class="form-group">
          <div class="form-control">
          <input class="form-input" type="radio" value="userIndividual" name="userIndividual" id="userIndividual" data-id="userIndividual"> 
          <label for="userIndividual">Privatperson</label></div>
        </div>
          <div class="form-control">
          <input class="form-input" type="radio" name="userIndividual" value="userSonstige" id="userSonstige" data-id="userSonstige"> 
          <label for="userSonstige">Sonstige</label>
          </div>
        </div>
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="text" name="userLogin" data-id="userLogin" placeholder="Login" required></div>
        </div>
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="password" name="userPassword" data-id="userPassword" placeholder="Passwort" required></div>
        </div>
        <div class="form-group">
          <div class="form-control"><input class="form-input" type="password" name="userPasswordConfirm" data-id="userPasswordConfirm" placeholder="Passwort erneut eingeben" required></div>
        </div>
        <button type="button" id="registerSubmit">Registrieren</button>    
        
        <div class="log" style="display: none">Markierte Felder müssen ausgefüllt werden</div>   
      </form>
      
</div>
</div>
</div>
    </div>
    `
        document.body.appendChild(this.modal)
        document.getElementById('modalClose').addEventListener('click', () => this.modal.remove())
        document.getElementById('registerSubmit').addEventListener('click', ev => this.registerUser(ev.target))
        document.getElementById('loginSubmit').addEventListener('click', ev => this.loginUser(ev.target))
        document.querySelector('[data-action="login"]').addEventListener('click', () => {
            document.querySelector('[data-tab="register"]').style.display = 'none';
            document.querySelector('[data-tab="login"]').style.display = 'block';
            document.querySelector('[data-action="login"]').classList.add('active')
            document.querySelector('[data-action="register"]').classList.remove('active')
        })
        document.querySelector('[data-action="register"]').addEventListener('click', () => {
            document.querySelector('[data-tab="login"]').style.display = 'none';
            document.querySelector('[data-tab="register"]').style.display = 'block';
            document.querySelector('[data-action="register"]').classList.add('active')
            document.querySelector('[data-action="login"]').classList.remove('active')
        })
    }

    validateForm (target) {
        const form = target.closest('.form')
        const log = form.querySelector('.log')
        const inputs = form.querySelectorAll('.form-input')
        let wrong = 0
        for (const input of Array.from(inputs)) {
            input.closest('.form-control').classList.remove('invalid')
            log.style.display = 'none'
            if(input.name === 'anrede-group') {
                const parent = input.closest('.form-row');
                let check1 = false;
                const gender = document.getElementsByName('anrede-group');
                for (const radioButton of gender) {
                    if (radioButton.checked) {
                        check1 = true;
                    }
                }
                if (check1) {
                    parent.classList.remove('invalid')
                } else {
                    parent.classList.add('invalid')
                }
            }
            if(input.name === 'userIndividual') {
                const parent2 = input.closest('.form-row');
                let check2 = false;
                const gender2 = document.getElementsByName('userIndividual');
                for (const radioButton of gender2) {
                    if (radioButton.checked) {
                        check2 = true;
                    }
                }
                if (check2) {
                    parent2.classList.remove('invalid')
                    form.querySelector('[data-id="userCompany"]').setAttribute('disabled', 'disabled')
                    form.querySelector('[data-id="userCompany"]').closest('.form-control').classList.remove('invalid')
                } else {
                    parent2.classList.add('invalid')
                }
            } else if (input.value.trim() === '') {
                wrong += 1
                input.closest('.form-control').classList.add('invalid')
                log.style.display = 'block'
            }
        }

        const emailField = form.querySelector('[data-id="userEmail"]');

        if(emailField) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!re.test(emailField.value)) {
                emailField.closest('.form-control').classList.add('invalid')
                wrong += 1
            }
        }

        return wrong === 0
    }

    loginUser (target) {
        if (this.validateForm(target)) {
            console.log('go login')
        }
    }
    registerUser (target) {
        if (this.validateForm(target)) {
            let user = '';
            let dataObjects = [];
            const form = target.closest('#videoRegistrationForm')
            const inputs = form.querySelectorAll('input')
            Array.from(inputs).forEach(input => {
                if (input.type != 'radio' || input.type === 'radio' && input.checked) {
                    dataObjects.push({
                        [input.name]:input.value
                    })
                }
                user = user + input.name + '=' + input.value + '&';
            })

            dataObjects = JSON.stringify(dataObjects);
            console.log(dataObjects);
            const data = new FormData();

            data.append( 'action', 'registerUser' );
            data.append( 'inputs', dataObjects );

            fetch(videocourseRegistration.ajax_url, {
                method: "POST",
                credentials: 'same-origin',
                body: data
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        console.log(data)
                        this.modal.remove()
                        this.container.classList.remove('blocked')
                        _paq.push(['trackEvent', 'VideoCourse', 'Registration', 'User', user])
                    }
                })
                .catch((error) => {
                    console.log('[Video Registration]');
                    console.error(error);
                });
        }
    }
}

const userCheck = new UserRegister(document.body)
