from flask import Blueprint, request, jsonify
from ..models import db, Stream

streams_bp = Blueprint('streams', __name__)

@streams_bp.route('', methods=['GET'])
def get_streams():
    active_streams = Stream.query.filter_by(is_active=True).all()
    return jsonify([stream.to_dict() for stream in active_streams])

@streams_bp.route('', methods=['POST'])
def create_stream():
    data = request.json
    new_stream = Stream(
        title=data['title'],
        user_id=data['userId']
    )
    db.session.add(new_stream)
    db.session.commit()
    return jsonify(new_stream.to_dict()), 201

@streams_bp.route('/<int:stream_id>', methods=['DELETE'])
def end_stream(stream_id):
    stream = Stream.query.get_or_404(stream_id)
    stream.is_active = False
    db.session.commit()
    return '', 204