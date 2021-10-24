var prev = null;
        function showImg(id)
        {
            var obj=document.getElementById(id);
            if (prev != id)
            {
                if (prev != null) document.getElementById(prev).className = 'hide';
                prev = id;
            }
            obj.className = obj.className == 'show' ? 'hide' : 'show';
        }