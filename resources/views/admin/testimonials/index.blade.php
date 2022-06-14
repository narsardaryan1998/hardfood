@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                @if(Session::has('status'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('status') }}
                    </div>
                @endif

                <h1>Отзывы</h1>

                <div class="row">
                    <div class="col-md-5">

                        <form
                            action="testimonials/add"
                            method="post"
                            enctype="multipart/form-data"
                        >
                            @csrf
                                <input type="file" name="image" >
                                <button class="btn btn-success" type="submit">Добавить</button>

                        </form>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mt-5">
                        <div class="row">
{{--                            @foreach ($testimonials as $item)--}}

{{--                                    <div class="col-md-3">--}}
{{--                                        <img src="/storage/{{$item->path}}" alt="" class="img-fluid testimonisals-img">--}}
{{--                                    </div>--}}

{{--                            @endforeach--}}
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection


