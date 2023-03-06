class Dashboard extends HTMLElement {
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }
  // component attributes
  static get observedAttributes() {
    return ["name"];
  }
  constructor() {
    super();
    this.name = "World";

    // const shadow = this.attachShadow({
    //     mode: "open"
    // });
  }
  // connect component
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<br /> 
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-sm-4">
                <a href="https://jagrutigurukul.org">
                <div class="card">
                  <img src="https://gurudev.jagrutigurukul.org/assets/img/JagrutiGurukulLogo.png" class="card-img-top" alt="Jagruti Gurukul">
                      <div class="card-body">
                        <p class="card-text"></p>
                      </div>
                </div>
                </a>
                </div>
            <div class="col-sm-4">
                <a href="https://jagrutigurukul.org/library">
                <div class="card">
                  <img src="https://gurudev.jagrutigurukul.org/assets/img/library_logo.png" class="card-img-top" alt="Jagruti Library">
                      <div class="card-body">
                        <p class="card-text"></p>
                      </div>
                </div>
                </a>
                </div>
                <div class="col-sm-4">
                    <a href="https://salesforceguruji.com">
                <div class="card">
                	<img src="https://gurudev.jagrutigurukul.org/assets/img/SalesforceGurujiLogo.jpg" 	class="card-img-top" alt="Jagruti Library">
                      <div class="card-body">
                        <p class="card-text"></p>
                      </div>
                </div>
                </a>
                </div>
                </div>
                
                <h3>Learning In Progress</h3>
                <div class="row">
                    
                <div class="col-sm-4">
                    <a href="/classroom">
                     <div class="card">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkiwv_y3_z4Ztws7uj5FBZZCmdBwYJiDT-Dg&usqp=CAU" class="card-img-top" alt="Jagruti Library">
                          <div class="card-body">
                            <h5 class="card-title">Cyber Seqirity</h5>
                          </div>
                    </div>
                    </a>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-3">
                <section style="">
  <div class="container">

    <div class="d-flex justify-content-center">
      <div class="">

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center p-1"
            style="border-top: 4px solid #ffa900;">
            <h5 class="mb-0">Gurudev Chat messages</h5>
            <div class="d-flex flex-row align-items-center">
              <span class="badge bg-warning me-3">New</span>
              <i class="fas fa-minus me-3 text-muted fa-xs"></i>
              <i class="fas fa-comments me-3 text-muted fa-xs"></i>
              <i class="fas fa-times text-muted fa-xs"></i>
            </div>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px;overflow-y: scroll;" id="allChat">

            <div class="d-flex flex-row center-content-start">
              <p id="greetingmessage">Let's start talking with gurudev.</p>
            </div>


          </div>
          <form onsubmit="hadleSendMessage(); return false;">
          <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <div class="input-group mb-0">
                <button type="button" id="ListeningButton" class="btn btn-warning" onclick="startListening();">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"></path>
                </svg>
              </button>
              <input type="text" id="message" class="form-control" placeholder="Type message"
                aria-label="Recipient's username" aria-describedby="sendButton" />
              <button class="btn btn-warning" type="submit" id="sendButton" style="padding-top: .55rem;">
                Send
              </button>
              
            </div>
          </div>
          </form>
        </div>

      </div>
    </div>

  </div>
</section>
            </div>
          </div>
    </div>
    <div class="words" contenteditable></div>
</body>
`;
  }
}
customElements.define("c-dashboard", Dashboard);
