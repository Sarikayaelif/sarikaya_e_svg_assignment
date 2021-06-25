        let linkAboutUs = document.querySelector('#linkAboutUs');
        let linkTryIt = document.querySelector('#linkTryIt');

        
        let motto1 = document.querySelector('#motto1');
        let emptyGlass = document.querySelector('#empty');
        let bubbleGlass = document.querySelector('#bubble');

        let AboutUscontent = document.querySelector('#AboutUscontent');

        let cap = document.querySelector('#caption');
        let captions = ['TRY IT', 'Great taste is not myth! Besides its great taste, it is safe for allergic people.'];

        let onStage = document.querySelector('#onStage');

        function showMotto() {
            motto1.classList.remove('hidden');
            motto1.classList.add('animate');

            linkTryIt.textContent = captions[this.dataset.choice];
        }

        function showBubble() {
            emptyGlass.classList.remove('empty');
            emptyGlass.classList.add('empty0');

            bubbleGlass.classList.remove('bubble');
            bubbleGlass.classList.add('bubble1');

            AboutUscontent.classList.add('AboutUscontent');
            onStage.classList.add('animateloop');


            cap.textContent = captions[this.dataset.choice];
        }


        linkAboutUs.addEventListener('click', showMotto, false);
        linkTryIt.addEventListener('click', showBubble, false);