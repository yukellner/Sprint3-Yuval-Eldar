const { Link } = ReactRouterDOM

export class AppAbout extends React.Component{


    render() {

        return <section className="about-section" >
            <div className="about-card">
                <img className="about-img" src="https://pps.whatsapp.net/v/t61.24694-24/165233122_1108791482862582_2521256379144752241_n.jpg?ccb=11-4&oh=01_AVzwgrg7qbFdQFblyM8XBdtssC2CAp3XSykwZYQjB6KZbg&oe=627E43EA" alt="" />
                <h1>Yuval Kellner</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quod ipsa iste perspiciatis. Praesentium quam reprehenderit ea quasi possimus,
                     animi accusamus porro enim accusantium nisi doloremque, iste similique beatae dicta tempora.</p>
            </div>
            <div className="about-card">
                <img className="about-img" src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/62539231_10157189642079344_2832973665530806272_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Y5IV8Qx4RJ4AX--QK5P&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8qf3BGYxyh_TFSYKonHTeeztWFLZKblco56SG5uB6M0Q&oe=6292A3CF" alt="" />
                <h1>Eldar Nir</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quod ipsa iste perspiciatis. Praesentium quam reprehenderit ea quasi possimus,
                     animi accusamus porro enim accusantium nisi doloremque, iste similique beatae dicta tempora.</p>
            </div>
    </section>
    }
}