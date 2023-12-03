<!-- Add this script tag after the existing script tags -->
<script>
    document.getElementById('show-sign-up').addEventListener('click', function () {
        document.getElementById('signup-form').style.display = 'block';
    });

    document.getElementById('hide-signup').addEventListener('click', function () {
        document.getElementById('signup-form').style.display = 'none';
    });
</script>