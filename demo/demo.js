var BCLS = (function (window, document) {
    var // player wrapper
        playerWrapper = document.getElementById('playerWrapper'),
        // get the wrapper's initial position
        playerWrapperBox = playerWrapper.getBoundingClientRect(),
        rightMove = Math.round(playerWrapperBox.right),
        bottomMove = Math.round(playerWrapperBox.bottom);
        console.log('playerWrapperBox', playerWrapperBox);
        /**
         * moves the player to bottom right corner and fixes it there
         */
        function scrollListener() {
            var t;
            // remove the scroll event listener
            window.removeEventListener('scroll', parkPlayer);
            // move the player after a half-second delay
            t = window.setTimeout(parkPlayer, 500);
        }

        function parkPlayer() {
            var currentX = 0,
                currentY = 0,
                newX,
                newY;

            while (currentY < bottomMove) {
                currentY++;
                if (currentX < rightMove) {
                    currentX++;
                }
                newY = bottomMove - currentY;
                newX = rightMove - currentX;
                playerWrapper.setAttribute('style', 'position:fixed;bottom:' + newY + 'px;right:' + newX + 'px;z-index:10000;');
            }

            // probably won't need this, but just in case
            while (currentX < rightMove) {
                currentX++;
                newX = rightMove - currentX;
                playerWrapper.setAttribute('style', 'position:fixed;bottom:' + newY + 'px;right:' + newX + 'px;z-index:10000;');
            }

        }

        // add scroll event listener, but only listen once!
        window.addEventListener('scroll', scrollListener);

})(window, document);
