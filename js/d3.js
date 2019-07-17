var chart = document.getElementById('pieChart');
console.log(chart);
var pie = new d3pie(chart, {
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "28%",
		"pieOuterRadius": "91%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "JavaScript",
				"value": 65,
				"color": "#2383c1"
			},
			{
				"label": "Java",
				"value": 10,
				"color": "#64a61f"
			},
			{
				"label": "PHP",
				"value": 30,
				"color": "#7b6788"
			},
			{
				"label": "Node",
				"value": 20,
				"color": "#a05c56"
			},
			{
				"label": "SASS",
				"value": 40,
				"color": "#961919"
			},
			{
				"label": "React",
				"value": 60,
				"color": "#d8d239"
			},
			{
				"label": "CSS",
				"value": 70,
				"color": "#e98125"
			},
			{
				"label": "GraphQL",
				"value": 20,
				"color": "#d0743c"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	},
	"callbacks": {
		"onMouseoverSegment": null,
		"onMouseoutSegment": null
	}
});