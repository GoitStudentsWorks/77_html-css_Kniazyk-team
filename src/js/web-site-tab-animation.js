
      document.addEventListener("DOMContentLoaded", () => {
        const messages = [
          "Welcome to CoffeJoy!",
          "The best coffee in town!",
          "One cup makes your day!",
          "Enjoy the aroma and taste!"
        ];
        let messageIndex = 0;
        let charIndex = 0;
        let typing = true;

        function updateTitle() {
          const currentMessage = messages[messageIndex];
          if (typing) {
            charIndex++;
            if (charIndex > currentMessage.length) {
              typing = false;
              setTimeout(updateTitle, 2000); // пауза після повного набору
              return;
            }
          } else {
            charIndex--;
            if (charIndex === 0) {
              typing = true;
              messageIndex = (messageIndex + 1) % messages.length;
              setTimeout(updateTitle, 1000); // пауза перед новим словом
              return;
            }
          }

          document.title = currentMessage.substring(0, charIndex);
          setTimeout(updateTitle, 150); // швидкість набору
        }

        updateTitle();
      });
    