from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from db import projects as project_data

app = FastAPI()

app.mount("/images", StaticFiles(directory="images"), name="images")

origins = [
    "https://artech-digital-portfolio.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get('/projects')
async def projects():
    """
    Endpoint for providing project data for Artech Digital.
    """
    return project_data
