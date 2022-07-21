var accessToken = "BQDVEQoKZQUZjueKMo4hV6vYuFzOdTZGH1JKvqUvuL1gbqI5JDbcO5-zq-yTUxHB-KPK6TgJ3zARMrNaQS97PJl-l6xY3RAjAeFmq0z69c00qIWyRbErGbzjqol07subTJA-GupsaAB9iTZnI5HZz8-AIRyKwoiVwifzWjpQnhMh4rC0VSUQAanFO1LHXBQ";

$.ajax({
  type: "GET",
  url: "https://api.spotify.com/v1/me/player/currently-playing?market=ES",
  headers: {
     'Authorization' : 'Bearer ' + accessToken
  },
  success: function(data) {
    console.log(data);
  },
  dataType: "json"
});