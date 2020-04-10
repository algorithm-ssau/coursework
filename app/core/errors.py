from collections.abc import Iterable

from fastapi.openapi.constants import REF_PREFIX
from fastapi.openapi.utils import (
    validation_error_definition,
    validation_error_response_definition,
)
from starlette.exceptions import HTTPException
from starlette.responses import JSONResponse
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY


async def http_base_error_handler(*_, exc: HTTPException) -> JSONResponse:
    return JSONResponse({"errors": [exc.detail]})


async def http_422_error_handler(*_, exc: HTTPException) -> JSONResponse:
    errors = {"body": []}

    if isinstance(exc.detail, Iterable) and not isinstance(exc.detail, str):
        for error in exc.detail:
            error_name = ".".join(
                error["loc"][1:]
            )
            errors["body"].append({error_name: error["msg"]})
    else:
        errors["body"].append(exc.detail)

    return JSONResponse(
        {"errors": errors},
        status_code=HTTP_422_UNPROCESSABLE_ENTITY
    )


validation_error_definition["properties"] = {
    "body": {"title": "Body", "type": "array", "items": {"type": "string"}}
}

validation_error_response_definition["properties"] = {
    "errors": {
        "title": "Errors",
        "type": "array",
        "items": {"$ref": REF_PREFIX + "ValidationError"},
    }
}
