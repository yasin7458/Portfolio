import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.subject === "" ||
            formData.message === ""
        ) {
            setStatus("Please fill all fields.");
            return;
        }

        setStatus("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <section className="contact-section">

            <div className="container">

                <div className="contact-heading">

                    <p className="section-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's Build
                        <span> Something.</span>
                    </h2>

                    <p>
                        Have a project, idea or opportunity?
                        Feel free to send me a message.
                    </p>

                </div>

                <div className="row g-5 align-items-start">

                    <div className="col-lg-5">

                        <div className="contact-info">

                            <div className="contact-info-number">
                                05
                            </div>

                            <p className="contact-small-title">
                                CONTACT
                            </p>

                            <h3>
                                Let's Talk
                                <br />
                                About Your
                                <span> Next Idea.</span>
                            </h3>

                            <p className="contact-description">
                                I'm always interested in discussing
                                new projects, creative ideas and
                                opportunities to learn and grow.
                            </p>

                            <div className="contact-detail">

                                <span>Email</span>

                                <strong>
                                    yasin@example.com
                                </strong>

                            </div>

                            <div className="contact-detail">

                                <span>Location</span>

                                <strong>
                                    Gujarat, India
                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-7">

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="row g-4">

                                <div className="col-md-6">

                                    <div className="form-group">

                                        <label>
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />

                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="form-group">

                                        <label>
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />

                                    </div>

                                </div>

                                <div className="col-12">

                                    <div className="form-group">

                                        <label>
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                        />

                                    </div>

                                </div>

                                <div className="col-12">

                                    <div className="form-group">

                                        <label>
                                            Message
                                        </label>

                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message..."
                                            rows="6"
                                        ></textarea>

                                    </div>

                                </div>

                                <div className="col-12">

                                    <button
                                        type="submit"
                                        className="contact-btn"
                                    >
                                        Send Message
                                    </button>

                                </div>

                            </div>

                            {status !== "" && (
                                <p className="contact-status">
                                    {status}
                                </p>
                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;
