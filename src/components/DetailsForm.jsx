export default function DetailsForm() {
    return (
        <div className="details-container neutral-white-background">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" maxLength={25} required />
            <label htmlFor="phone">Contact #:</label>
            <input type="tel" name="phone" id="phone" maxLength={25} required />
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="email" id="email" required />
        </div>
    )
}