function Login(event) {
    event.preventDefault();
    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "fiap" && senha == "fiap") {
      alert("Usuário e Senha corretos! Bem-Vindo(a)!");
      window.location = "dashboard.html";
    }else{
      alert("Usuário ou Senha Incorretos, Tente Novamente!");
    }
 }
