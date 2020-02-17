window.onload = function() {
	EXAM.init();
}

EXAM = {
	init() {
		this.selectors();
        this.createElements();
        this.SetEventHandlers();        
	},
	selectors() {
		var divOut = document.getElementById('outerDiv');
		console.log(divOut.innerHTML);
		
		var paragraphs = document.getElementsByTagName('p');	// returns a NodeList type
		console.log(paragraphs);
		console.log('Total of paragraphs: ', paragraphs.length);
		for (var i=0; i<paragraphs.length; i++) {
			console.log(paragraphs[i]);
		}
		
		var psubp = document.getElementsByClassName('subPara');
		console.log('Total of subPara(class) paragraphs: ', psubp.length);
		for (var i=0; i<psubp.length; i++) {
			console.log(psubp[i], psubp[i].tagName);
		}
		
		var qsps = document.querySelector('p');
		console.log('querySelector: ', qsps);
		
		var qspsAll = document.querySelectorAll('p');
		console.log('querySelectorAll: ', qspsAll);
		
		var qsById = document.querySelector('#outerDiv');
		console.log('querySelector by Id: ', qsById);
	},
	createElements() {
		var outerDiv = document.getElementById('outerDiv');
		var art = document.createElement('article');
		art.innerHTML = 'This article was created and added dinamically';
        outerDiv.appendChild(art);
        
        var prgrp = document.createElement('p');
        prgrp.innerHTML = 'Dynamically created paragraph in the same way as the previous one...';

        art.appendChild(prgrp);

        var art2 = document.getElementById('outerDiv').appendChild(document.createElement('article'));
        art2.innerHTML = 'Article number two added to outerDiv';

        var art3 = outerDiv.insertBefore(document.createElement('article'), outerDiv.firstChild);
        art3.innerHTML = 'article inserted before art2';
    },
    SetEventHandlers() {
        document.querySelector('#btnRemoveP').onclick = function() {
            document.getElementById('innerDiv').removeChild(document.getElementById('innerDiv').firstChild);
        };
        document.querySelector('#btnRemoveInnerDiv').onclick = function() {
            // only for IE/Edge - removeNode

            document.getElementById('innerDiv').removeNode(true);
        };
        document.querySelector('#btnReplaceInnerDiv').onclick = function() {
            var nodInnerDiv = document.getElementById('innerDiv');
            var nodNewDiv = document.createElement('div');
            for (var i=0; i<nodInnerDiv.childNodes.length; i++) {
                var anchor = document.createElement('a');
                nodNewDiv.appendChild(anchor);
                anchor.setAttribute('href', 'http://www.bing.ca');
                anchor.text = nodInnerDiv.childNodes[i].textContent;
                nodNewDiv.appendChild(document.createElement('br'));
            }
            // only for IE/Edge - replaceNode
            nodInnerDiv.replaceNode(nodNewDiv);
        };
        
    },
}