import React,{Component} from "react";

class Header extends Component
{
    render()
    {
        return(
            <div>
            <section class="py-5 text-center container">
            <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto shadow-lg bg-dark w-100">
              <h1 class="text-warning"><strong >SCP Foundation</strong></h1>
              <hr class="text-warning" />
              <p class="text-danger"><strong>WARNING: THE FOUNDATION DATABASE IS</strong></p>
              <h2 class="text-danger"><strong>CLASSIFIED</strong></h2>
              <p class="text-danger"><strong>ACCESS BY UNAUTHORIZED PERSONNEL IS STRICTLY PROHIBITED PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED</strong></p>
            </div>
            </div>
            </section>
            </div>

        );
    }
}

export default Header;