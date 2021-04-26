const template = `
  <div class="card">
      <div class="card-header">
          <center><i class="fa fa-user-md"></i></center>
          <center>Chatbot Final Year Project</center>
          <span class="d-none d-sm-block float-right text-muted">
            powered by 
            <a href="http://infermedica.com/">
              Infermedica API
            </a>
          </span>
      </div>
      <div id="step-container" class="card-block">
        <!-- dynamic content goes here -->
      </div>
      <div class="card-footer">
          <button id="next-step" class="btn btn-primary float-right">Next <i class="fa fa-chevron-right"></i></button>
      </div>
  </div>
`;

export default template;
