from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field
from typing import Annotated

class UserInput(BaseModel):
    Pregnancies: Annotated[int, Field(...)]
    Glucose: Annotated[int, Field(...)]
    BloodPressure: Annotated[int, Field(...)]
    SkinThickness: Annotated[int, Field(...)]
    Insulin: Annotated[int, Field(...)]
    BMI: Annotated[float, Field(...)]
    DiabetesPedigreeFunction: Annotated[float, Field(...)]
    Age: Annotated[int, Field(...)]




