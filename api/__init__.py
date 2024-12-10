from flask import Flask
from flask_cors import CORS
from .config import Config
from .models import db
from .routes import register_routes

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize extensions
    CORS(app)
    db.init_app(app)
    
    # Ensure instance and upload folders exist
    app.config['UPLOAD_FOLDER'].mkdir(parents=True, exist_ok=True)
    
    # Register routes
    register_routes(app)
    
    # Create database tables
    with app.app_context():
        db.create_all()
    
    return app