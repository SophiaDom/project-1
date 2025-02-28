$(document).ready(function() {
    const knob = $('.knob');
    const innerCircle = $('.inner-circle');
    const circle = $('.circle');
    const radius = circle.width() / 2;
    const effect = $('.effect');

    function getRandomBorderWidth() {
        return Math.floor(Math.random() * 20) + 5; 
    }

    function getRandomBorderStyle() {
        const styles = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'];
        return styles[Math.floor(Math.random() * styles.length)];
    }

    function getRandomBorderRadius() {
        return Math.floor(Math.random() * 100);
    }

    innerCircle.on('click', function(e) {
        const rect = innerCircle[0].getBoundingClientRect();
        const centerX = rect.left + radius;
        const centerY = rect.top + radius;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        
        const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
        
        const borderWidth = getRandomBorderWidth(); 
        const borderStyle = getRandomBorderStyle(); 
        const outlineWidth = getRandomBorderWidth(); 
        const outlineStyle = getRandomBorderStyle(); 

        const borderRadius = getRandomBorderRadius(); 

        effect.css({
            '--effect-border': `${borderWidth}px ${borderStyle} rgba(112, 248, 186, 0.15)`,
            '--effect-outline': `${outlineWidth}px ${outlineStyle} rgba(202, 254, 72, 0.15)`,
            '--effect-border-radius': `${borderRadius}px`,
            '--before-after-border': `${borderWidth}px ${borderStyle} rgba(112, 248, 186, 0.15)`,
            '--before-after-outline': `${outlineWidth}px ${outlineStyle} rgba(202, 254, 72, 0.15)`,
            '--before-after-border-radius': `${borderRadius}px`
        });

        const knobX = centerX + (radius - knob.width() / 2) * Math.cos(angle) - knob.width() / 2;
        const knobY = centerY + (radius - knob.height() / 2) * Math.sin(angle) - knob.height() / 2;

        knob.css({
            left: (knobX - rect.left) + 'px',
            top: (knobY - rect.top) + 'px'
        });
    });
});



$(document).ready(function() {
    $('.start').append('<div class="inner-circle-one"><div class="inner-circle-two"><div class="inner-circle-three"></div></div></div>');
  
    $(".organic").click(function() {
      if ($("body").css("filter") === "invert(1)") {
        $("body").css("filter", "none");
      } else {
        $("body").css("filter", "invert(1)")
      }
    })
  });



  $(document).ready(function() {
    function getRandomColorWithOpacity() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color + '65';
    }

    $('.slider').on('input', function() {
        const value = $(this).val();

        const randomColor = getRandomColorWithOpacity();
        $('.effect').css('border-color', randomColor);
        $('.effect').css('outline-color', randomColor);
        $('.effect::after').css('border-color', randomColor);
        $('.effect::after').css('outline-color', randomColor);
        $('.effect::before').css('border-color', randomColor);
        $('.effect::before').css('outline-color', randomColor);
    });
});
