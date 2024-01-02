"use client";
import React from "react"
import RepoCard from "react-repo-card";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 p-8 gap-4 md:grid-cols-4">
            <RepoCard username="alvinbengeorge" repository="alfred-discord-bot" dark={true}/>
            <RepoCard username="alvinbengeorge" repository="FileSync" dark={true}/>
            <RepoCard username="alvinbengeorge" repository="hamiltonian" dark={true}/>
            <RepoCard username="alvinbengeorge" repository="CRustCpp" dark={true}/>
        </div>
    )
}

export default Projects