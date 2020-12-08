'use strict';


export class Calculator {
    constructor() {
        this.id = Math.random();
        this.body = document.querySelector('body');

        //creation des elements de la zone de la calculatrice
        this.container = document.createElement('div');
        this.container.classList.add("container");

        this.screen = document.createElement('div');
        this.screen.classList.add("screen");

        this.screenText = document.createElement('p');
        this.screenText.classList.add(`screenText`)
        this.content = this.screenText.innerHTML;


        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add("buttons-container")

        
        this.createZone = function () {
            // creation de la zone de la calculatrice
            this.body.prepend(this.container);
            this.container.prepend(this.screen);
            this.screen.after(this.buttonsContainer);
            this.screen.append(this.screenText);
        }

        this.createButton = function (content) {
            // creation d'un bouton
            const button = document.createElement('button');
            button.textContent = content;
            return button
        }

        this.createTableButtons = function () {
            // creation de tous les boutons
            let button = null;
            const content = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "AC", "+", "-", "x", "/", "="];
            const classes = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "point", "remove", "plus", "minus", "multiplied", "divided", "equal"];
            for (let i = 0; i <= content.length - 1; i++) {
                button = this.createButton(String(content[i]));
                button.classList.add(classes[i]),
                    this.buttonsContainer.prepend(button);
            }
        }
        // MARCHE POUR LA CALC 1 MAIS LA 2 ECRIS SUR LA 1
        this.writeInput = function (event) {
            // gestion des input et du calcul
            let input = event.target.textContent;
            let content = this.querySelector('.screenText');
            if (input === "AC") {
                content.innerHTML = '';
            } if (input !== "AC" && input !== "=" && input !== "x") {
                content.innerHTML += input;
            } if (input === "=") {
                let result = String(eval(content.innerHTML));
                console.log(result);
                content.innerHTML = result;
            } if (input === "x") {
                content.innerHTML += "*"
            }
        }

        /*    
            this.writeInput = function (event) {
                // gestion des input et du calcul
                let input = event.target.textContent;
                let content = this.screenText.innerHTML;
                if (input === "AC") {
                    content.innerHTML = '';
                } if (input !== "AC" && input !== "=") {
                    content.innerHTML += input;
                } if (input === "=") {
                    let result = eval(content.innerHTML);
                    console.log(result);
                    content.innerHTML = String(result);
                }
            }    
        */
        this.createZone();
        this.createTableButtons();

        this.container.addEventListener('click', this.writeInput)
    }
}