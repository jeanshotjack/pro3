import Chatkit from '@pusher/chatkit-client';
    import axios from 'axios';

    function handleInput(event) {
      const { value, name } = event.target;

      this.setState({
        [name]: value,
      });
    }

    function connectToChatkit(event) {
      event.preventDefault();

      const { userId } = this.state;

      if (userId === null || userId.trim() === '') {
        alert('Invalid userId');
        return;
      }
       console.log(userId);
      axios
        .post('/users', { userId })
        .then(() => {
          const tokenProvider = new Chatkit.TokenProvider({
            url: '/authenticate',
          });

          const chatManager = new Chatkit.ChatManager({
            instanceLocator: "v1:us1:ef7aa3e2-6df4-4a19-ab4d-3fc3fd246f84",
            userId,
            tokenProvider,
          });

          return chatManager
            .connect({
              onAddedToRoom: room => {
                const { rooms } = this.state;
                this.setState({
                  rooms: [...rooms, room],
                });
              },
            })
            .then(currentUser => {
              this.setState(
                {
                  currentUser,
                  showLogin: false,
                  rooms: currentUser.rooms,
                }
              );
            });
        })
        .catch(console.error);
    }

    export { handleInput, connectToChatkit }