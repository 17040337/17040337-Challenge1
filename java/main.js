window.onload = function () { 

    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "transparent",
        animationEnabled: true,
        title:{
            fontColor: "white",
            horizontalAlign: "center"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabelFontColor: "white",
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 67, label: "Vleeswaren",    color: "#ff613b"   },
                { y: 28, label: "Groenten/fruit",    color: "#ffb43b"  },
                { y: 10, label: "Noten",    color: "#ff3b3b"   },
                { y: 7, label: "Snoepgoed",    color: "#ffe83b"  },
                { y: 15, label: "Graan",    color: "#a87726"  },
                { y: 6, label: "kruiden",    color: "#f2f2f2"  }
            ]
        }]
    });
    chart.render();
    
    var chart = new CanvasJS.Chart("chartContainer-line", {
	animationEnabled: true,
    backgroundColor: "transparent",
	theme: "light2",
	title:{
        fontColor: "white",
	},
        
    axisX:{
        labelFontColor: "white",    
        
    },
	axisY:{
		includeZero: false,
        labelFontColor: "white",
	},
	data: [{        
		type: "line", 
        color: "#ff2a2a",
        indexLabelFontColor: "white",
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		]
	}]
});
chart.render();
    
    var chart = new CanvasJS.Chart("chartContainer-bars", {
	animationEnabled: true,
	backgroundColor: "transparent",
	title:{
        fontColor: "white",
       
	},
	axisX:{
		interval: 1,
        labelFontColor: "white",
        
	},
	axisY2:{
        labelFontColor: "white",
        titleFontColor: "white",
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgb(0, 194, 255)",
		title: "Aantal personen"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#f40038",
		dataPoints: [
			{ y: 3, label: "Sweden" },
			{ y: 7, label: "Taiwan" },
			{ y: 5, label: "Russia" },
			{ y: 9, label: "Spain" },
			{ y: 7, label: "Brazil" },
			{ y: 7, label: "India" },
			{ y: 9, label: "Italy" },
			{ y: 8, label: "Australia" },
			{ y: 11, label: "Canada" },
			{ y: 15, label: "South Korea" },
			{ y: 12, label: "Netherlands" },
			{ y: 15, label: "Switzerland" },
			{ y: 25, label: "Britain" },
			{ y: 28, label: "Germany" },
			{ y: 29, label: "France" },
			{ y: 52, label: "Japan" },
			{ y: 103, label: "China" },
			{ y: 134, label: "US" }
		]
	}]
});
chart.render();
    
    var chart = new CanvasJS.Chart("chartContainer-column", {
	animationEnabled: true,
    backgroundColor: "transparent",  
	theme: "light1",
	title:{

        fontColor: "white",
        labelFontColor: "white",
        titleFontColor: "white",
	},
        
        axisX:{
        labelFontColor: "white",
        title: "Kamers",
        titleFontColor: "white",
        
	},
        
        axisY:{
        title: "Graden Celcius",
        titleFontColor: "white",
        
	},
	data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#ffffff",
		indexLabelPlacement: "outside",
		dataPoints: [
			{ y: 21, label:"Recreatiezaal 1",   color: "#ffb43b" },
            { y: 20, label:"Recreatiezaal 2",   color: "#ffda3d"  },
            { y: 18, label:"Slaapzaal 1",       color: "#31ff31"  },
            { y: 17, label:"Slaapzaal 2",       color: "#31ff90"  },
            { y: 18, label:"Slaapzaal 3",       color: "#31ff31"  },
            { y: 22, label:"Kantine",           color: "#ff5f2f"  },
            { y: 15, label:"Keuken",            color: "#2fefff"  },
            { y: 21.5, label:"Besturingskamer", color: "#ffac3b"  },
            { y: 19, label:"Ziekenboeg",        color: "#c0ff31"  },
            
			

		]
	}]
});
chart.render();
    
    
    
    

    
}