search_btn.addEventListener('click', async function () {
    bookmark_icon.getElementsByTagName("i")[0].className = "bi bi-bookmark";
    let show_result = document.getElementById('show_result');
    show_result.style.display = "none";
    if (search_word.value == "") {
        show_result.style.display = "none";
        var toastLiveExample = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }
    else {
        fetchWord();
        word_history_section.style.display = "none";
        loading_animation.style.display = "block";

        setTimeout(function () {
            loading_animation.style.display = "none";
            word_history_section.style.display = "block";
        }, 990);
        setTimeout(function () {
            show_result.style.display = "block";

        }, 1000);


    } /***local storage for recently searched  words  */
    let recently_searched = localStorage.getItem("recently_searched");
    if (recently_searched == null) {
        recentWord = [];
    } else {
        recentWord = JSON.parse(recently_searched);

    }
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search_word.value}`);
    const data = await response.json();

    let recentObj = {
        title: `${data[0].word}`,
        meaning: `${data[0].meanings[0].definitions[0].definition}`,
    };

    if (search_word.value != "") {
        recentWord.push(recentObj);
        localStorage.setItem("recently_searched", JSON.stringify(recentWord));
        displayRecentWord();
    }

});
