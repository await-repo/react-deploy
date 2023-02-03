import { Percent } from './Percent'
import { Details } from './Details'

import { profetionalSkills } from "../data/profetionalSkills"
import { courses } from "../data/courses"
import { languajes } from "../data/languajes"
import { extracurriculars } from "../data/extracurricular"
import { experiences } from "../data/experiences"
import { schools } from "../data/schools"
import { contacts } from "../data/contacts"

import { Card } from "./Card"
import { Linked } from "./Linked"

export function Body() {

    return (
        <div className="bg-slate-100 shadow-2xl">
            <div className="sm:p-10 p-5">

                <p className="text-7xl text-center">
                    Luis Ávila
                </p>

                <div className="grid md:grid-cols-5 mx-auto gap-10 pt-20">
                    <div className="col-span-2">

                        <Card title="Contact Info">
                            <div className="px-4 break-words">
                                <ul>
                                    {contacts.map((contact) => {
                                        return (
                                            <div key= {contact.id} className = "flex py-2">
                                                <contact.icon style={{fontSize: '25px'}} className={contact.color}/>
                                                <Linked
                                                    title = {contact.title}
                                                    content = {contact.content}
                                                    path = {contact.path}
                                                />
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Card>


                        <Card title="Education">
                            {schools.map((school) => {
                                return (
                                    <Details
                                        key={school.id}
                                        date={school.date}
                                        title={school.title}
                                        content={school.content}
                                    />
                                )
                            })}
                        </Card>


                        <Card title="Languajes">
                            {languajes.map((languaje) => {
                                return (
                                    <div className="py-3" key={languaje.id}>
                                        <Percent
                                            title={languaje.title}
                                            percent={languaje.percent}
                                        />
                                    </div>
                                )
                            })}
                        </Card>


                        <Card title="Extracurricular Activities">
                            {extracurriculars.map((extracurricular) => {
                                return (
                                    <Details
                                        key={extracurricular.id}
                                        date={extracurricular.date}
                                        title={extracurricular.title}
                                        content={extracurricular.content}
                                    />
                                )
                            })}
                        </Card>

                        <Card title="Soft Skills">
                            <div className="grid grid-cols-2 gap-4">
                                <div>Discipline</div>
                                <div>Responsability</div>
                                <div>Problem analysis</div>
                                <div>Determination</div>
                            </div>
                        </Card>

                    </div>

                    <div className="col-span-3">

                        <Card title="Profile">
                            I am a student at the faculty of computer science. Since I was a child I have liked programming, web development and graphic design. I practice web development using JavaScript and Python libraries and frameworks because they are languages that have a great power of expression and interpretation.
                        </Card>

                        <Card title="Experience">
                            {experiences.map((experience) => {
                                return (
                                    <Details
                                        key={experience.id}
                                        date={experience.date}
                                        title={experience.title}
                                        content={experience.content}
                                    />
                                )
                            })}
                        </Card>

                        <Card title="Certifications">
                            <div className="grid lg:grid-cols-2 gap-4 pb-2">
                                {courses.map((course) => {
                                    return (
                                        <Details
                                            key={course.id}
                                            date={course.date}
                                            title={course.title}
                                            content={course.content}
                                            path={course.path}
                                        />
                                    )
                                })}
                            </div>
                        </Card>


                        <Card title="Professional skills">
                            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-2 pb-2">
                                {profetionalSkills.map((skill) => {
                                    return (
                                        <div key={skill.id}>
                                            <div className="grid grid-cols-6">
                                                <div>
                                                    <skill.icon style={{fontSize: '35px',}} 
                                                    className = {`mt-1 ${skill.color}`}/>
                                                </div>
                                                <div className="col-span-5">
                                                    <Percent
                                                        title = {skill.title}
                                                        percent = {skill.percent}
                                                    />
                                                </div>
                                            </div>
                                            <div className="pt-3 pb-4">
                                                <ul className="text-slate-700 grid xl:grid-cols-3 grid-cols-2 gap-x-3 gap-y-3">
                                                    {skill.libraries.map((library) => {
                                                        return (
                                                            <li key={library.id}>
                                                                {library.name} 
                                                                {library.related === "" ?
                                                                    <></>
                                                                    :
                                                                    <small> ({library.related}) </small>
                                                                }
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Card>


                    </div>
                </div>

            </div>
        </div>
    )
}