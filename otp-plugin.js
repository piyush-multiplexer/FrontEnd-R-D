myWrapper = (function () {
    let defaults = {email: 'abc@def.com', phone: '1234567890',};
    let modal;

    function myWrapper(options) {
        document.addEventListener('click', eventHandler, false);
    }

    let eventHandler = function (event) {
        switch (event.target.id) {
            case 'reset-password-btn':
                openResetPasswordModal()
                break
            case 'send-otp-btn':
                hideModal('otpSelection')
                openInputOtpModal()
                break
            case 'submit-otp-btn':
                hideModal('otpInput')
                submitOtpModal()
                break
            default:
                break
        }
    };

    function openResetPasswordModal() {
        modal = document.createElement('div')
        modal.classList.add('modal')
        const otpSelection = document.createElement('div')
        otpSelection.setAttribute("id", "otpSelection");
        let radio1 = document.createElement('input');
        let radio2 = document.createElement('input');
        radio1.type = 'radio';
        radio2.type = 'radio';
        radio1.id = 'email';
        radio2.id = 'phone';
        radio1.name = 'channel';
        radio2.name = 'channel';
        radio1.value = defaults.email
        radio2.value = defaults.phone

        let label1 = document.createElement('label')
        let label2 = document.createElement('label')
        label1.htmlFor = 'email';
        label1.innerText = 'Email';
        label2.htmlFor = 'phone';
        label2.innerText = 'Phone';

        let newline = document.createElement('br');
        let nextBtn = document.createElement('button');
        nextBtn.setAttribute('id', 'send-otp-btn')
        nextBtn.setAttribute('class', 'button button2')
        nextBtn.innerText = 'SEND OTP'
        otpSelection.appendChild(radio1);
        otpSelection.appendChild(label1);
        otpSelection.appendChild(newline);
        otpSelection.appendChild(radio2);
        otpSelection.appendChild(label2);
        otpSelection.appendChild(newline);
        otpSelection.appendChild(nextBtn)
        modal.appendChild(otpSelection)
        document.body.appendChild(modal)
    }

    function openInputOtpModal() {
        const otpInput = document.createElement('div')
        otpInput.setAttribute("id", "otpInput");
        let header = document.createElement('h1');
        let selectedRadio = document.querySelector('input[name="channel"]:checked')
        header.innerHTML = `OTP Sent to your ${selectedRadio.id} ${selectedRadio.value}`;
        let textBox = document.createElement('input');
        textBox.type = 'text';
        textBox.id = 'otp-value';

        let label1 = document.createElement('label')
        label1.htmlFor = 'otp-value';
        label1.innerText = 'Enter OTP';

        let newline = document.createElement('br');
        let submitBtn = document.createElement('button');
        submitBtn.setAttribute('id', 'submit-otp-btn')
        submitBtn.setAttribute('class', 'button button2')
        submitBtn.innerText = 'SUBMIT OTP'
        otpInput.appendChild(header);
        otpInput.appendChild(textBox);
        otpInput.appendChild(label1);
        otpInput.appendChild(newline);
        otpInput.appendChild(submitBtn);
        otpInput.appendChild(newline);
        modal.appendChild(otpInput)
        document.body.appendChild(modal)
    }

    function submitOtpModal() {
        const submitOtp = document.createElement('div')
        submitOtp.setAttribute("id", "otpInput");
        const otp = document.getElementById('otp-value').value
        let header = document.createElement('h1');
        header.setAttribute('id', 'otp-result')
        header.innerText = `OTP ${otp}`;
        submitOtp.appendChild(header)
        modal.appendChild(submitOtp)
        document.body.appendChild(modal)
    }

    function hideModal(modalId) {
        let modal = document.getElementById(modalId)
        modal.style.visibility = 'hidden'
    }

    return myWrapper;
})();

