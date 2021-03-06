import { createCell } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';

import menu from './data/menu';

export function HomePage() {
    return (
        <section className="container">
            <Jumbotron
                title="新冠战疫信息平台"
                description="新冠病毒疫情中的武汉援助信息网站"
            />
            <ul className="row list-unstyled">
                {menu.slice(1, -1).map(({ title, href, icon }) => (
                    <li class="col-sm-6 col-md-6 col-lg-4">
                        <a
                            className="card text-center text-decoration-none mb-3"
                            href={href}
                        >
                            <i className={`fa fa-5x fa-${icon} mt-4 mb-2`} />
                            <p>{title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
