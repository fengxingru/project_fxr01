
        var btn = document.querySelector("button");
        var div = document.querySelector("div");

        btn.addEventListener('click', function() {
            if (div.style.display == 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        })
    