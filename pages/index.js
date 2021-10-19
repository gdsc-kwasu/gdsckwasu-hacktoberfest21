import Head from "next/head";
import React from "react";
import Card from "../src/components/Card";
import { students } from "../src/students";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Students &mdash; Hacktoberfest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {students.map((student) => {
        return (
          <Card
            data={student}
            key={student.student_id}
            theme={student.card_theme}
          />
        );
      })}
    </React.Fragment>
  );
}
