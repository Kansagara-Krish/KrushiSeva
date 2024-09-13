import React from 'react'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import PreHeader from "../../components/preheader/preheader";
import "./faq.css";

function faq() {
  return (
    <>
       <PreHeader />
      <Header />
      <div class="section-4">

        <div className="ques-grid">
    <h1>Frequently Asked Questions</h1>
    <p className='para-faq'>Have a different question and can’t find the answer you’re looking for? Reach out to our support team by sending us an email and we’ll get back to you as soon as we can.</p>
        </div>

        <div className="ques-card">
          <div className="faq-card">
            <div className="faq-ques">What's the best thing about Switzerland?</div>
            <div className="faq-ans">
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">How do you make holy water?</div>
            <div className="faq-ans">
            You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Why do you never see elephants hiding in trees?</div>
            <div className="faq-ans">
            Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">What do you call someone with no body and no nose?</div>
            <div className="faq-ans">
            Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Why can't you hear a pterodactyl go to the bathroom??</div>
            <div className="faq-ans">
            Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
          </div>
          <div className="faq-card">
            <div className="faq-ques">Why did the invisible man turn down the job offer?</div>
            <div className="faq-ans">
            He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
            </div>
          </div>
        </div>
</div>
      <Footer />
    </>
  )
}

export default faq
