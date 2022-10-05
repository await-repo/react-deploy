import { Percent } from './Percent'
import { Details } from './Details'

import { profetionalSkills } from "../data/profetionalSkills"
import { certifications } from "../data/certifications"
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

                <p className="text-5xl text-center">
                    Luis Ángel Ávila Alvarado
                </p>

                <div className="grid md:grid-cols-5 mx-auto gap-10 pt-20">
                    <div className="col-span-2">

                        <Card title="Contact Info">
                            <div className="px-4 break-words">
                                <ul className="list-disc">
                                    {contacts.map((contact) => {
                                        return (
                                            <Linked
                                                key={contact.id}
                                                title={contact.title}
                                                content={contact.content}
                                                path={contact.path}
                                            />
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
                                    <Percent
                                        key={languaje.id}
                                        title={languaje.title}
                                        percent={languaje.percent}
                                    />
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
                                {certifications.map((certification) => {
                                    return (
                                        <Details
                                            key={certification.id}
                                            date={certification.date}
                                            title={certification.title}
                                            content={certification.content}
                                        />
                                    )
                                })}
                            </div>
                        </Card>


                        <Card title="Professional skills">
                            {profetionalSkills.map((skill) => {
                                return (
                                    <Percent
                                        key={skill.id}
                                        title={skill.title}
                                        percent={skill.percent}
                                    />
                                )
                            })}
                        </Card>


                    </div>
                </div>

            </div>
        </div>
    )
}