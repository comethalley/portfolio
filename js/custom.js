
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

particlesJS('particles-js', {
	particles: {
		number: {
			value: 80, // Number of particles
			density: {
				enable: true,
				value_area: 800 // Area for particles
			}
		},
		color: {
			value: "#ffffff" // Particle color
		},
		shape: {
			type: "circle", // Shape of particles
			stroke: {
				width: 0,
				color: "#000000"
			}
		},
		opacity: {
			value: 0.5, // Particle opacity
			random: false
		},
		size: {
			value: 5, // Particle size
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: true, // Enable lines between particles
			distance: 150, // Distance for linking particles
			color: "#ffffff", // Line color
			opacity: 0.4, // Line opacity
			width: 1 // Line width
		},
		move: {
			enable: true, // Enable movement
			speed: 2, // Speed of movement
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out", // Particles go out of canvas
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: "canvas", // Interactivity on canvas
		events: {
			onhover: {
				enable: true,
				mode: "grab" // Enable grab mode
			},
			onclick: {
				enable: true,
				mode: "push" // Add particles on click
			},
			resize: true // Adjust on window resize
		},
		modes: {
			grab: {
				distance: 200, // Distance to "grab" particles
				line_linked: {
					opacity: 1 // Line opacity when grabbed
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true // Retina display support
});

$('#resume').click(function(e) {
    e.preventDefault();  
   
   const fileUrl = '../resume/Bonita-Kenneth-Resume.pdf';

   
   const a = document.createElement('a');
   a.href = fileUrl;
   a.download = 'Bonita-Kenneth-Resume.pdf'; 

   
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
});