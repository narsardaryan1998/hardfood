@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div id="app" class="row">
            <div class="col-md-12">
                @if(Session::has('status'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('status') }}
                    </div>
                @endif

                <div class="row">
                    <div class="col-6">
                        <h1 class="ml-3 float-left">Меню</h1>
                        <a href="/admin/menu/add" class="btn float-left addLink ml-2" aria-hidden="true"><i
                                class="fa fa-plus"></i></a>
                    </div>
                    <div class="col-6">
                        <a href="/admin/menu/import" class="btn importLink float-right">Импорт меню</a>
                    </div>
                </div>
{{--                <menu-component :products="{{json_encode($products)}}" :categories="{{json_encode($categories)}}"></menu-component>--}}
                    <admin-order-component v-bind:menu="{{ (isset($menu)) ? json_encode($menu) : 0 }}"></admin-order-component>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection


