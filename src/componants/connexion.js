function Connexion() {
    return (
    <form class="connexion row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-md-6">
        <button type="submit" class="btn btn-primary">Connexion</button>
        </div>
    </form>
    );
}


export default Connexion;  