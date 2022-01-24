      $(document).ready(function () {
        let _local_storage = {};
        let newArray = [];
        let _local_storage_index = localStorage.getItem("length") ?? 0;

        var data1 = "",
          data2 = "";
        $("#send").click(function () {
          var user1 = $("<img />", {
            id: "user1",
            src: "images/user1.jpg",
            alt: "user1",
          });
          var sendmessages = $("<div />", { class: "sendmessages" });
          var message = $(".message").val();
          sendmessages.append(user1);
          sendmessages.append('<p class="smessage">' + message + "</p>");
          $("#chatboxborder").append(sendmessages);         
          _local_storage[_local_storage_index] = [
          {
            type: 'sender',
            message: message
          }];
          _local_storage_index++;
          localStorage.setItem("length", _local_storage_index);
          localStorage.setItem("messages",  JSON.stringify(_local_storage));

          $("#message").val("");


        });

        $("#receive").click(function () {
          var user2 = $("<img />", {
            id: "user2",
            src: "images/user2.jpg",
            alt: "user2",
          });
          var receivemessages = $("<div />", { class: "receivemessages" });
          var message = $("#message").val();
          receivemessages.append(
            '<p id="rmessage" style="background: #b3e5c2;">' + message + "</p>"
          );
          receivemessages.append(user2);
          $("#chatboxborder").append(receivemessages);
          _local_storage[_local_storage_index] = [
          {
            type: 'receiver',
            message: message
          }];
          _local_storage_index++;
          console.log(_local_storage);
          localStorage.setItem("length", _local_storage_index);
          localStorage.setItem("messages",  JSON.stringify(_local_storage));

          $("#message").val("");

        });

        if (localStorage.getItem("messages")) {
          var array = JSON.parse( localStorage.getItem("messages"));
          console.log(array);

          _local_storage = array;
          for (var a in array) {
            var variable = array[a];
            if (variable.length == 0) continue;
            var type = array[a][0].type;
            if (type == "sender") {
              var user1 = $("<img />", {
                id: "user1",
                src: "images/user1.jpg",
                alt: "user",
              });
              var sendmessages1 = $("<div />", { class: "sendmessages1" });
              sendmessages1.append(user1);
              sendmessages1.append('<p class="smessage">' +  array[a][0].message  + "</p>");
              $("#chatboxborder").append(sendmessages1);
            } else {
              var user2 = $("<img />", {
                id: "user2",
                src: "images/user2.jpg",
                alt: "user",
              });
              var receivemessages1 = $("<div />", {
                class: "receivemessages1",
              });
              receivemessages1.append(
                '<p id="rmessage"  style="background: #b3e5c2;">' +
                  array[a][0].message  +
                  "</p>"
              );
              receivemessages1.append(user2);
              $("#chatboxborder").append(receivemessages1);
            }
          }
        }
        $("#clear").click(function (e) {
          $("#message").val("");
          localStorage.clear();
        });
      });