from flask import Blueprint
from .posts import posts_bp
from .streams import streams_bp

def register_routes(app):
    app.register_blueprint(posts_bp, url_prefix='/api/posts')
    app.register_blueprint(streams_bp, url_prefix='/api/streams')