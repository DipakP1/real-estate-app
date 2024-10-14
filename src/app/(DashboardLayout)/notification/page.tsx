'use client';
import Image from "next/image";
import innobloomslogo1 from "../../../../public/images/backgrounds/innobloomslogo1.png";
import correct from "../../../../public/images/backgrounds/correct.png";

const Notification = () => {
    return (
        <div style={styles.container}>
            <div style={styles.notificationBox}>
                <div className="logo">
                    <Image src={innobloomslogo1} alt="" style={styles.logoImage} />
                </div>
                <div style={styles.correctImageContainer}>
                    <Image src={correct} alt="" style={styles.correctImage} />
                </div>
                <div style={styles.greeting}>
                    <p>
                        <span style={styles.greetingText}>Hi, </span>
                        <span style={{ ...styles.greetingText, fontWeight: "bolder" }}>James</span>
                    </p>
                </div>
                <div style={styles.hopeText}>
                    <p style={styles.paragraph}>Hope this email finds you well.</p>
                </div>
                <div style={styles.infoText}>
                    <p style={styles.infoHeader}>Here are your login credentials</p>
                </div>
                <div>
                    <p style={styles.paragraph}>Dear User,</p>
                    <p style={{ ...styles.paragraph, lineHeight: "1.5" }}>
                        We are pleased to provide you with your login credentials for our system. Please find the details below.
                    </p>
                </div>
                <div>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.listLabel}>Email Address: </span>
                            <span style={styles.listText}>user@example.com</span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.listLabel}>Mobile No: </span>
                            <span style={styles.listText}>9876567654</span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.listLabel}>Username: </span>
                            <span style={styles.listText}>johnDoe</span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.listLabel}>Temporary Password: </span>
                            <span style={styles.listText}>TempPass123</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p style={styles.paragraph}>
                        You can now access online by any device by going to: (Link URL)
                    </p>
                </div>
                <div>
                    <p style={{ ...styles.paragraph, lineHeight: "1.5em" }}>
                        Important: Please change your password upon first login to ensure the security of your account. If you have any questions or need assistance, feel free to reach out.
                    </p>
                </div>
                <div style={styles.buttonContainer}>
                    <button style={styles.button}>
                        Get Started
                    </button>
                </div>
                <footer style={styles.footer}>
                    <p>© 1824, made by Innoblooms for a better web.</p>
                </footer>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        margin: "0",
        height: "100%",
    },
    notificationBox: {
        width: "100%",
        maxWidth: "700px",
        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.3)",
        padding: "20px",
        boxSizing: "border-box",
        borderRadius: "8px",
        backgroundColor: "white",
    },
    logoImage: {
        width: "20%",
        height: "auto",
    },
    correctImageContainer: {
        textAlign: "center",
        marginTop: "-50px",
    },
    correctImage: {
        height: "12%",
        width: "12%",
    },
    greeting: {
        textAlign: "center",
        lineHeight: "2em",
    },
    greetingText: {
        fontSize: "20px",
    },
    hopeText: {
        textAlign: "center",
        lineHeight: "0.1em",
    },
    paragraph: {
        fontSize: "16px",
    },
    infoText: {
        textAlign: "center",
        lineHeight: "",
    },
    infoHeader: {
        fontSize: "18px",
        lineHeight: "",
    },
    list: {
        paddingLeft: "18px",
        // listStyleType: "none",
    },
    listItem: {
        marginBottom: "10px",
    },
    listLabel: {
        fontSize: "15px",
        lineHeight: "1.5em",
        fontWeight: "bolder",
    },
    listText: {
        fontSize: "15px",
        lineHeight: "1.5em",
    },
    buttonContainer: {
        textAlign: "center",
    },
    button: {
        backgroundColor: "#56A5FE",
        color: "white",
        width: "170px",
        padding: "10px",
        fontSize: "15px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
    footer: {
        position: "relative",
        bottom: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#f1f1f1",
        textAlign: "center",
        marginTop: "18px",
        padding: "10px",
    },

};

export default Notification;
