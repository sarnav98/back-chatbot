const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Chatbot Final Year Project</h5>
      <div class="card-text">
        <p>
        Mental Health is a critical issue in today’s health world. Mental Health is not something readily discussed in India. According to us the term Mental-Health in India is misunderstood as Mentally-Unstable. Depression is one of the most neglected problems in India. The only cure for depression and anxiousness is that we get to talk to people who can motivate us. Thus we have come up with an Idea of a Mental Health Chatbot that can be used for curing Depression and Anxiety.
        </p>
        <p>
          Please click 
          <span class="badge badge-primary">Next</span> 
          to move to the first question.
        </p>
      </div>
    `);
  });
};

export default template;
